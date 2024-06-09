'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useFormspark } from '@formspark/use-formspark'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const FORMSPARK_FORM_ID = 'bEf4b3y9f'

interface FormData {
  [key: string]: string | number;
  fullName: string;
  email: string;
  phone: string;
  offer: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID
  })
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    offer: '',
    message: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await submit(formData)
    console.log('Offer submitted', formData)
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        name='fullName'
        placeholder='Full name (Required)'
        className='mb-6'
        onChange={handleChange}
        value={formData.fullName}
        required
      />
      <div className='flex flex-col md:flex-row md:space-x-4 mb-0 md:mb-6'>
        <Input
          id='email'
          type='email'
          name='email'
          placeholder='Email (Required)'
          className='mb-4 md:mb-0'
          onChange={handleChange}
          value={formData.email}
          required
        />
        <Input
          id='phone'
          type='tel' // Changed to 'tel' for phone input type
          name='phone'
          placeholder='Phone number (Required)'
          onChange={handleChange}
          value={formData.phone}
          className='mb-4 md:mb-0'
          required
        />
      </div>
      <Input
        id='offer'
        type='text'
        name='offer'
        placeholder='Offer price in USD? (Required)'
        onChange={handleChange}
        className='mb-4 md:mb-6'
        value={formData.offer}
        required
      />
      <Textarea
        id='message'
        name='message'
        placeholder='Message (optional)'
        className='min-h-[100px] mb-4 md:mb-6'
        onChange={handleChange}
        value={formData.message}
      />
    
      <Button type='submit' className='bg-[#22c55e] text-white w-full' disabled={submitting}>
        Make an offer
      </Button>
    </form>
  )
}

export default ContactForm
