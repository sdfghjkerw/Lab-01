import React, {useState} from "react";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    })
    const [errors, setErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')

    const validationField = (name, value) => {
        let error = ''
        if (name === 'name'){
            if(!value.trim()){
                error = 'имя обязательно'
            }else if(value.length<2){
                error = 'имя должно быть больше 2 символов'
            }
        }
        if (name === 'email'){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!value){
                error = 'email обязателен'
            }else if (!emailRegex.test(value)){
                error = 'некорректный email'
            }
        }
        if (name === 'age'){
            if(!value){
                error = 'возвраст обязателен'
            }else if(Number(value)<18){
                error = 'возвраст должен быть не менее 18'
            }
        }
        setErrors(prev => ({
            ...prev,
            [name]:error
        }))
        return error
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))

        validationField(name, value) 
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const nameError = validationField('name', formData.name)
        const emailError = validationField('email', formData.email)
        const ageError = validationField('age', formData.age)

        if (nameError || emailError || ageError){
            setSuccessMessage('')
            return
        }
        setSuccessMessage('регистрация выполнена успешно')
        setFormData({name:'', email: '', age: ''})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
            {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange}/>
            {errors.age && <p style={{color:'red'}}>{errors.age}</p>}

            <button type="submit">submit</button>
            {successMessage && (<p style={{color: 'green'}}>{successMessage}</p>)}
        </form>
    )
}


export default RegistrationForm