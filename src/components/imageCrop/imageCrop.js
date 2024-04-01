import { useState } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'
import './imageCrop.css'

export default function ImageCrop({ url, updateImage }) {
	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [zoom, setZoom] = useState(1)
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
	//const [croppedImage, setCroppedImage] = useState(null)

	const onCropComplete = (croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels)
	}

	const showCroppedImage = async () => {
		try {
			const updatedImage = await getCroppedImg(url, croppedAreaPixels)
			console.log('donee', { updatedImage })
			updateImage(updatedImage)
		} catch (e) {
			console.error(e)
		}
	}

	/*const onClose = () => {
		setCroppedImage(null)
	}*/

	return (
		<div className="image-crop">
			<div className="crop-container">
				<Cropper
					image={url}
					crop={crop}
					zoom={zoom}
					aspect={1 / 1}
					onCropChange={setCrop}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
				/>
			</div>
			<div className="controls">
				<input
					type="range"
					value={zoom}
					min={1}
					max={3}
					step={0.1}
					aria-labelledby="Zoom"
					onChange={(e) => {
						setZoom(e.target.value)
					}}
					className="zoom-range"
				/>
				<button onClick={showCroppedImage}>Show Result</button>
			</div>

		</div>
	)
}
