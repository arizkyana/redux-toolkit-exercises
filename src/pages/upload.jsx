import React from 'react';

import { Container } from 'react-bootstrap';

function UploadPage() {
  return (
    <Container className="pt-4">
      <div>
        <label
          htmlFor="upload"
          className="d-flex align-items-center px-3"
          style={{
            border: '1px solid gray',
            width: '50%',
            minHeight: '3rem',
          }}
        >
          <span className="d-block">upload file</span>
          <input type="file" id="upload" style={{ display: 'none' }} />
        </label>
      </div>
    </Container>
  );
}

export default UploadPage;
