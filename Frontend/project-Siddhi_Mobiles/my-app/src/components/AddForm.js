import React from 'react'

export default function add() {
  return (
    <div>
      <>
   <style dangerouslySetInnerHTML={{__html:"\n  label {\n font-weight: bold;\n  }\n" }}/>
  <div className="container mt-5 border rounded p-4">
    <h2 className="text-center">ADD PRODUCT</h2>
    <form action="#" method="post" encType="multipart/form-data">
      <div className="form-group">
        <label htmlFor="product_name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="product_name"
          name="product_name"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_price">Product Price</label>
        <input
          type="text"
          className="form-control"
          id="product_price"
          name="product_price"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_description">Product Description</label>
        <textarea
          className="form-control"
          id="product_description"
          name="product_description"
          required=""
          defaultValue={""}
        />
      </div>
      <div className="form-group">
        <label htmlFor="product_quantity">Quantity</label>
        <input
          type="text"
          className="form-control"
          id="product_quantity"
          name="product_quantity"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="category_id">Category ID</label>
        <select
          className="form-control"
          id="category_id"
          name="category_id"
          required=""
        >
          <option value="">Select Category</option>
          <option value="mobile">Mobile</option>
          <option value="tv">TV</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="supplier_id">Supplier ID</label>
        <select
          className="form-control"
          id="supplier_id"
          name="supplier_id"
          required=""
        >
          <option value="">Select Supplier</option>
          <option value="supplier1">Supplier 1</option>
          <option value="supplier2">Supplier 2</option>
          <option value="supplier3">Supplier 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="product_image">Add Image</label>
        <input
          type="file"
          className="form-control-file"
          id="product_image"
          name="product_image"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</>

    </div>
  )
}