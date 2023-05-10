'use client'

import { useCallback, useState } from 'react'
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

	const {
		register,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
	})
	
	const onSubmit: SubmitHandler<FieldValues> = data => {
		setIsLoading(true)

		if (variant === 'REGISTER') {
			//TODO Axios register
		}

		if (variant === 'LOGIN') {
			//TODO NextAuth Sign In
		}
	}

	const socialAction = (action: string) => {
		setIsLoading(true)

		//TODO NextAuth social Sign In
	}

  return <div>AuthForm!!</div>
}
export default AuthForm
