import { useRef, useContext } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "../../components/firebase";
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../providers/global';

export default function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const global = useContext(GlobalContext)
	const navigate = useNavigate()

	async function signIn() {
		const email = emailRef.current.value
		const password = passwordRef.current.value

		if (email !== '' && password !== '') {
			let authId
			await signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					authId = userCredential.user.uid
					console.log(authId)
				})
				.catch((error) => {
					const errorMessage = error.message
					console.log(errorMessage)
					return
				})
			const docRef = doc(db, 'users', authId)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				const data = docSnap.data()
				global.updateUser(data)
				navigate(`/profile/${data.id}`)
			}
			else {
				console.log("No document found in Firebase")
			}

		}
	}

	return (
		<div>
			<input placeholder='email' ref={emailRef} />
			<input type="password" placeholder='password' ref={passwordRef} />
			<button onClick={signIn}>Login</button>
			<div>Not Registered? <Link to='/register'>Click Here to Register</Link></div>
		</div>
	)
}