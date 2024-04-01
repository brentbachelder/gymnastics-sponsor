import { useRef, useState, useContext } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../components/firebase";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../providers/global';

export default function Register() {
	const global = useContext(GlobalContext)
	const firstNameRef = useRef()
	const lastNameRef = useRef()
	const teamRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()
	const [loading, setLoading] = useState(false)

	async function createUser() {
		setLoading(true)
		const firstName = firstNameRef.current.value
		const lastName = lastNameRef.current.value
		const team = teamRef.current.value
		const email = emailRef.current.value
		const password = passwordRef.current.value

		if (email !== '' && password !== '' && firstName !== '' && lastName !== '' && team !== '') {
			let authId
			await createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					authId = userCredential.user.uid
				})
				.catch((error) => {
					const errorMessage = error.message
					console.log(errorMessage)
				})
			console.log("AuthId: " + authId)
			const randomNum = Math.floor(1000 + Math.random() * 9000);
			const id = firstName + lastName.charAt(0) + '-' + randomNum.toString()
			const user = {
				id: id.toLowerCase(),
				firstName: firstName,
				lastName: lastName,
				team: team
			}
			const docRef = doc(db, 'users', authId)
			await setDoc(docRef, user)
			global.updateUser(user)
		}
		setLoading(false)
	}

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<input placeholder='First Name' ref={firstNameRef} />
			<input placeholder='Last Name' ref={lastNameRef} />
			<input placeholder='Team' ref={teamRef} />
			<input placeholder='Email' ref={emailRef} />
			<input placeholder='Password' ref={passwordRef} />
			<button disabled={loading} onClick={createUser}>Create User</button>
			<div>Already a User? <Link to='/login'>Click Here to Login</Link></div>
		</div>
	)
}