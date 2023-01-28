import React from "react";
import classes from './Form.module.css';

const Form = () => {


    return(
        <section className={classes.form}>
            <h2 className="form-title">
                your property with us and be confident that your room will be filled out!
            </h2>

            <form>
                <h2>add a new property</h2>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        type='text'
                        placeholder="enter name"
                        id="name"
                    />
                </div>

                <div>
                    <label htmlFor="address">
                        Address
                    </label>
                    <input
                        type='text'
                        placeholder="enter address"
                        id="address"
                    />
                </div>

                <div>
                    <label htmlFor="unit">
                        Unit Number
                    </label>
                    <input
                        type='text'
                        placeholder="enter unit"
                        id="unit"
                    />
                </div>

                <div>
                    <label htmlFor="city">
                        City
                    </label>
                    <select name="city" id="city" placeholder="select city">
                        <option value="lagos">
                            Ikeja
                        </option>
                    </select>
                </div>

                <div>
                    <label htmlFor="city">
                        State
                    </label>
                    <select name="city" id="city" placeholder="select city">
                        <option value="lagos">
                            Lagos
                        </option>
                    </select>
                </div>

                <div>
                    <label htmlFor="city">
                        Room Type
                    </label>
                    <select name="city" id="city" placeholder="select city">
                        <option value="lagos">
                            Select Room Type
                        </option>
                    </select>
                </div>

                <div>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input
                        type='text'
                        placeholder="enter unit"
                        id="price"
                    />
                </div>

                <div className={classes.city}>
                    <label htmlFor="city">
                        Room Type
                    </label>
                    <select name="city" id="city" placeholder="select city">
                        <option value="lagos">
                            Select Room Type
                        </option>
                    </select>
                </div>

                <div className={classes.description}>
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea
                        placeholder="enter description"
                        id="description"
                    />
                </div>

                <div className={classes.file}>
                    <label htmlFor="photos">
                        Upload Photos
                    </label>
                    <div>
                        <p>
                            Drag your images here, or <span>browse</span>
                        </p>
                        <p>
                            Supported:  JPG, JPEG, PNG
                        </p>
                        <input
                            type='file'
                            placeholder="enter description"
                            id="photos"
                        />
                    </div>
                </div>

                <button>
                    add new property
                </button>

            </form>


        </section>
    )
}

export default Form