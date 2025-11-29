
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {z} from 'zod';
import { useTranslation } from "react-i18next"

const contactedSchema = z.object({
  nameUser: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),

  emailUser: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ 
      pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address" }
    ),

  messageUser: z
    .string()
    .nonempty({ message: "Message is required" })
    .min(10, { message: "Message must have at least 10 characters" }),

  agree: z
    .boolean()
    .refine(val => val === true, {
      message: "You must agree to the terms",
    }),
});



type Contacted  = z.infer<typeof contactedSchema>

const ContactForm = () => {
  const {t} = useTranslation();

  const {register  , handleSubmit, formState:{errors, isValid}, reset:resetForm} = useForm<Contacted>({
    resolver: zodResolver(contactedSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit : SubmitHandler<Contacted> = async (data) =>{
    console.log(data);
    try{
      const response = await fetch('https://developer-rucel.com/send-mail.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(data),
      });
      const textResponse = await response.text();
      console.log("Server response:",response.status);
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${textResponse}`);
      }
      setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
      resetForm();
    }catch(error){
      console.error(error)
    }
    
  }

  return (
    <form className="w-full flex flex-col p-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-forms flex flex-col md:flex-row items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center justify-center gap-10 w-full md:w-[50%]">
          <label htmlFor="nameUser" className=" w-full h-12 relative">
            <input type="text" className="border border-secondary w-full h-full pl-4 pr-10"

            {...register("nameUser", {
              required: true,
            })}
             />
             {errors.nameUser?.type ==="required" ? <p className="text-sm text-error">Your name is Required</p> : <p className="text-sm text-error">{errors.nameUser?.message}</p>}
          </label>

          <label htmlFor="email" className="w-full h-12 relative">
            <input {...register('emailUser', {
              required:true,
            })} 
            type="text" name="emailUser" className="border border-secondary w-full h-full pl-4 pr-10"/>
            {errors.emailUser?.type ==="required" ? <p className="text-sm text-error">Your email is Required</p> : <p className="text-sm text-error">{errors.emailUser?.message}</p> }
          </label>
        </div>
        <div className="w-full md:w-[50%] h-35">
            <textarea
            {...register("messageUser", {
              required:true,
            })} 
          className="border border-secondary w-full  h-35 resize-none relative pl-4 pr-5" name="messageUser" id="message">
          </textarea>
            {errors.messageUser?.type==="required" ? <p className="text-sm text-error">Your Message is Required</p>
            : <p className="text-sm text-error">{errors.messageUser?.message}</p>
          }
        </div>
        
      </div>
      <div className="privacy flex flex-col justify-between w-full pt-4 gap-6">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row items-center justify-start w-full">

            <label className="flex flex-row neon-checkbox gap-2" >
                    <input type="checkbox" 
                        id="agree"
                        {...register("agree",{
                          required:true
                        })}
                    />
                    <span className={`checkmark ${errors.agree ? 'outlined-error border-2 border-error' : ''}`} tabIndex={0}></span>
            </label>
            <p>{t("contact.privacy_start")}<a className="text-secondary text-bold" href="/privacy-policy">{t("contact.privacy_link")}</a> {t("contact.privacy_p")}</p>
          </div>
          {errors.agree && <p className="text-sm text-error">{errors.agree?.message}</p>}
        </div>
        <div className="flex flex-col justify-center md:flex-row items-center md:justify-between w-full">
          <div className=''>
            <p className={`${submitting ? 'text-secondary text-xl': 'hidden'}`}>
              {t("contact.send_success")}
            </p>
            
          </div>
          <button type="submit" className={`flex items-center justify-center border-2 ${!isValid? ' border-gray-600 text-gray-600': 'border-secondary text-secondary'} w-32 h-12 `} disabled = {!isValid}>
            Send
          </button>
        </div>
      </div>
        
    </form>
  )
}

export default ContactForm