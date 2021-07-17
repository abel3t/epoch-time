import React, { useState } from 'react';

export default function Header() {
  return (
    <>
      <div>
        <h1 className="text-3xl my-3">
          <strong>Epoch</strong>Time
        </h1>
        <h5 className="text-2xl text-pink-800 my-3">
          Epoch &amp; Unix Timestamp Conversion Tools
          <hr />
        </h5>
      </div>
    </>
  );
}

const Logo = () => {
  return (
    <img
      style={{ width: 100, height: 60, color: '#fff' }}
      src="https://spchinhhang.s3-ap-southeast-1.amazonaws.com/logo.svg"
      alt=" Workflow"
    />
  );
};
