import React from 'react'
import { lazy } from 'react';
import contact from '../assets/contact.jpg'
import '../CSS/About.css'
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Form, Input } from 'antd';
const Tilt = lazy(() => import("../Tilt"));


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 300,
  },
};



const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: '-100%' }}
        transition={{ duration: 0.7, ease: "easeInOut" }} className='outerbox'>
        <div className='contactimage'>
          <Tilt image={contact}></Tilt>
        </div>
        <div className='mx-auto'>
          <p className='contact mx-auto'>Contact</p>
          <Form
            {...layout}
            name="nest-messages"

            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item
              name={['user', 'name']}
              label="Name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Your Message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Contact
