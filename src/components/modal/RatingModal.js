import React, { useState, Fragment } from 'react';
import Modal from 'antd/lib/modal';
import { StarOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

const RatingModal = ({ children }) => {
  const user = useSelector((state) => state.user);
  const [modalVisible, setModalVisible] = useState(false);
  const history = useHistory();
  const { slug } = useParams();

  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
      history.push({
        pathname: '/login',
        state: { from: `/product/${slug}` },
      });
    }
  };

  return (
    <Fragment>
      <div onClick={handleModal}>
        <StarOutlined className='text-danger' /> <br />
        {user ? 'Leave rating' : 'Login to leave rating'}
      </div>
      <Modal
        title='Leave your rating'
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success('Thank you for your review. It will appear soon');
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </Fragment>
  );
};

export default RatingModal;
