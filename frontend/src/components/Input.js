import React from 'react';
import { Input, Tooltip } from 'antd';
import { CiLocationArrow1 } from "react-icons/ci";
const TextInput = () => (
  <>
    <Input
    style={{
       
        
    }}
      placeholder="Enter your email"
      color='black'
      suffix={
        <Tooltip title="Send">
          <CiLocationArrow1
            style={{
              color: 'rgba(0,0,0,.45)',
              fontSize: '20px',
              cursor:"pointer"
            }}
          />
        </Tooltip>
      }
    />
    
  </>
);
export default TextInput;