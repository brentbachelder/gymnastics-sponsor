import { useContext, useEffect, useState } from "react"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import Resizer from "react-image-file-resizer"
import { GlobalContext } from "../../providers/global"
import { useNavigate } from "react-router-dom"
import ImageCrop from "../../components/imageCrop/imageCrop"

export default function Profile() {
	const global = useContext(GlobalContext)
	const navigate = useNavigate()
	const storage = getStorage()

	const [url, setUrl] = useState()
	const [openCrop, setOpenCrop] = useState(false)
	const [user, setUser] = useState()
	const [image, setImage] = useState()
	//const [file, setFile] = useState()
	//const [fileDataURL, setFileDataURL] = useState(null);
	//const [tempUrl, setTempUrl] = useState()
	//const [finalImage, setFinalImage] = useState()

	useEffect(() => {
		if (global.user) {
			setUser(global.user)
			if (global.user.pictureURL && global.user.pictureURL !== '')
				setImage(global.user.pictureURL)
			else setImage()
		}
		else {
			setUser()
			navigate('/login')
		}
	}, [global, navigate])

	const handleUpload = async (event) => {
		const upload = event.target.files[0]
		await uploadToURL(upload)
		//setFile(file)


		/*const storageRef = ref(storage, 'temp/' + user.id + '.jpg')
		console.log(storageRef.fullPath)
		const file = event.target.files[0]
		await uploadBytes(storageRef, file).then((snapshot) => {
			const temp = 'https://' + snapshot.metadata.bucket + '/' + snapshot.metadata.fullPath
			setTempUrl(temp)
			console.log("Uploaded image to temp")
			console.log(snapshot)
		})
		console.log(file)*/
		//const image = await resizeFile(file)
		//setImage(image)
		//console.log(image)
	}

	const uploadToURL = async (upload) => {
		let fileReader, isCancel = false;
		if (upload && upload.type.match('image.*')) {
			console.log(upload)
			fileReader = new FileReader();
			fileReader.readAsDataURL(upload);
			fileReader.onloadend = (e) => {
				const { result } = e.target;
				if (result && !isCancel) {
					setUrl(result)
					setOpenCrop(true)
				}
			}
		}
		return () => {
			isCancel = true;
			if (fileReader && fileReader.readyState === 1) {
				fileReader.abort();
			}
		}
	}

	const updateImage = async (updatedImage) => {
		setUrl(null)
		setOpenCrop(false)
		const newImage = await remakeImage(updatedImage)
		const newerImage = await resizeFile(newImage)
		const finalImage = await remakeImage(newerImage)
		await uploadImage(finalImage)
		console.log(finalImage)
		setImage(finalImage)
		//setImage(updatedImage)
	}

	/*useEffect(() => {
		let fileReader, isCancel = false;
		if (file) {
			fileReader = new FileReader();
			fileReader.onload = (e) => {
				const { result } = e.target;
				if (result && !isCancel) {
					setTempUrl(result)
				}
			}
			fileReader.readAsDataURL(file);
		}
		return () => {
			isCancel = true;
			if (fileReader && fileReader.readyState === 1) {
				fileReader.abort();
			}
		}
	}, [file])*/

	const remakeImage = async (url) => {
		const response = await fetch(url)
		const blob = await response.blob()
		return blob
	}

	const resizeFile = (file) => new Promise(resolve => {
		Resizer.imageFileResizer(
			file, 300, 300, 'JPEG', 100, 0,
			uri => {
				resolve(uri)
			}
		)
	})

	const uploadImage = async (upload) => {
		const storageRef = ref(storage, 'users/' + user.id + '.jpg')
		await uploadBytes(storageRef, upload).then((snapshot) => {
			console.log("Uploaded that file!")
		})
	}



	return (
		user && <div>
			<div>Name: {user.firstName} {user.lastName}</div>
			<div>Team: {user.team}</div>
			<div>Gymnast ID: {user.id}</div>
			<img alt='user-icon' src={image ? image : '/img/user-icon.png'} />
			<input type="file" accept="image/jpeg" onChange={handleUpload} />
			{openCrop && <ImageCrop url={url} updateImage={updateImage} />}
		</div>
	)
}

// {image ? 'Change Photo' : 'Upload Photo'}