import { Modal, useModal, Button, Text } from "@nextui-org/react";

export default function Error(prop) {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
        {prop.message}
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Error
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">{prop}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
