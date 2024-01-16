import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export const Message = ({ label, placeholder, name, register }) => {
    return (
        <div className="text-sm w-full relative">
            <label htmlFor={label} className="text-border font-semibold">{label}</label>
            <textarea
                id={label}
                className="w-full h-40 mt-2 p-6 border text-text bg-dry  border-border rounded"
                placeholder={placeholder}
                name={name}
                {...register}
            />
        </div>
    )
}


export const Select = ({ label, options, name, register }) => {
    return (
        <>
            <label htmlFor={label} className="text-border font-semibold">{label}</label>
            <select
                className="w-full mt-2 px-6 py-4 border whitespace-pre border-border rounded text-text bg-main"
                name={name}
                {...register}
            >
                {options?.map((option, index) => (
                    <option className="mb-2" key={index} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </>
    )
}

export const Input = ({ label, placeholder, type, bg, register, readOnly, name, value, onChange }) => {

    const [open, setOpen] = useState(false);


    return (
        <div className="text-sm w-full relative">
            <label htmlFor={label} className="text-border font-semibold">{label}</label>
            <input
                type={type === "password" ? (open ? "text" : "password") : type}
                name={name}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                {...register}
                id={label}
                placeholder={placeholder}
                className={`w-full text-sm mt-2 p-5 border border-border rounded text-white ${bg ? "bg-main" : "bg-dry"}`}
            />
            {
                type === "password" ? (
                    open ?
                        <div
                            onClick={() => setOpen(false)}
                            className="absolute right-2 cursor-pointer bottom-5">
                            <BsEyeFill size={20} />
                        </div>
                        :
                        <div
                            onClick={() => setOpen(true)}
                            className="absolute right-2 cursor-pointer bottom-5">
                            <BsEyeSlashFill size={20} />
                        </div>
                ) :
                    <>
                    </>
            }
        </div>
    )
}