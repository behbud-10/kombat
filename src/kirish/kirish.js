// src/kirish/Loading.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css'; import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/next-page');
    }, 20000000); // 20 soniya

    return () => clearTimeout(timer); // Tozalash funksiyasi
  }, [navigate]);

  return (
    <div className='loading-container'>
      <Flex align="center" gap="middle" className='loading'>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
      <h2 className='Text1'>Hamster Kombat Token</h2>
 

      <div className='shadof'>
      <h4 className='h4Text2'>stay tuned</h4>
      <h4 className='h4Text1'>More info in official channels</h4>
        <div className='HamsterLink'>
          <div className='Tarmoq1'><FaTelegramPlane /></div>
          <div className='Tarmoq2'><FaYoutube /></div>
          <div className='Tarmoq3'><RiTwitterXLine /></div>
        </div>
      </div><h1 className='h1Text'>on TON</h1>
    </div>
  );
};

export default Loading;
