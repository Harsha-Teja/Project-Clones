
// DemoForm = fields
    // Fullname
    // Phone number
    // Email
    // When to have the demo 
    // Subjects searching for 
    // Disclaimer on privacy
    // Submit Button

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import * as yup from "yup";

let schema = yup.object().shape({
    name: yup
        .string().min(4)
        .matches(/^([^0-9]*)$/, "First name should not contain numbers"),
        // .required("Full name is a required field"),
    email: yup
        .string()
        .email("Email should have correct format"),
        // .required("Email is a required field"),
    // phoneNumber: yup
    //     .number("please enter a valid phone number")
    //     .positive("please enter a valid phone number")
    //     .required("Email is a required field"),
    // demoschedule: yup
    //     // .oneOf(['Today, Tomorrow, Rightnow, willdecideafterthecall'])
    //     .required(),
    // subject: yup
    //     // .oneOf(['english, maths, science, hindi'])
    //     .required()
})

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
        return value
    }
    return (
        phoneNumber.formatInternational() 
    );
    };

function DemoForm (){
    
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = data => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Fullname */}
            <div>
                <label htmlFor="fullname">Full Name: </label>
                <input name="name" id="name" ref={register} />
                <p>{errors?.name?.message}</p>
            </div>
            {/* Phone Number */}
            <div>
                <label htmlFor="PhoneNumber">PhoneNumber: </label>
                <input 
                ref={register}
                id="phoneNumber"
                // type="integer"
                name="phoneNumber"
                onChange={(event) => {
                event.target.value = normalizePhoneNumber(event.target.value);
            }}
            />
            <p>{errors?.phoneNumber?.message}</p>
            </div>
            {/* Email */}
            <div>
                <label htmlFor="email">Email: </label>
                <input name="email" id="email" ref={register} />
                <p>{errors?.email?.message}</p>
            </div>
            {/* When to have Demo */}
            <div>
                <label htmlFor="demoschedule">When would you like to have the Demo class: </label>
                <select id="demoschedule" name="demoschedule" ref={register}>
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Rightnow">Right Now</option>
                    <option value="willdecideafterthecall">Will decide after the call</option>
                </select>
                <p>{errors?.demoschedule?.message}</p>
            </div>
            {/* Subjects searchin for */}
            <div>
                <label htmlFor="subject">Which subjects would you like to get Demo Class on: </label>
                <select id="subject" name="subject" ref={register}>
                    <option value="english">English</option>
                    <option value="maths">Maths</option>
                    <option value="science">Science</option>
                    <option value="hindi">Hindi</option>
                </select>
                <p>{errors?.subject?.message}</p>
            </div>
            {/* submit button */}
            <input type="submit" />
        </form>
    )
}

export default DemoForm