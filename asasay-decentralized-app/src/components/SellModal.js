import { useState } from "react";
import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
function MyModal(onhandelCallback) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
      // Add logic to handle the input value, e.g., submit it to an API or use it as needed.
      console.log('Input value:', inputValue);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        <button onClick={showModal}>Open Modal</button>
        <Modal
          title="Which Address to send"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            placeholder="address"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Modal>
      </div>
    );
  }
  
  export default MyModal;