import React, { useCallback } from 'react';
import { View } from '@tarojs/components';
import { useEnv, useModal, useNavigationBar, useToast } from 'taro-hooks';

import './index.scss';

const Index = () => {
  const env = useEnv();
  const { setTitle } = useNavigationBar({ title: 'Taro Hooks' });
  const showModal = useModal({
    title: 'Taro Hooks Canary!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下'
  });
  const { show } = useToast({ mask: true });

  const handleModal = useCallback(() => {
    showModal({ content: '不如给一个star⭐️!' }).then(() => {
      show({ title: '点击了支持!' });
    });
  }, [show, showModal]);

  return (
    <View className="wrapper">

    </View>
  );
};

export default Index;
