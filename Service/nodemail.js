import nodemailer from 'nodemailer'
const mail=(email,randomString)=>{
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aravindhan2825@gmail.com",
        pass: "esknogvjejlszodz",
      },
    });
    let details = {
      from: "aravindhan2825@gmail.com",
      to: email,
      subject: "login msg",
      html: `<p>Click the following link to reset your password: <a href="http://localhost:3000/resetpassword/${randomString}">Reset Password</a></p>`,
    };
    mailTransporter.sendMail(details,(error,info)=>{
        if(error){
            console.log("mail not send")
            console.log(error)
            
        }
        else{
            console.log("mail  send")
            console.log(info.response)
        }
    })
    
}
export default mail