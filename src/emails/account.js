const sgMail=require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendwelcomemail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'ankitjakhar225@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app,${name}.`
    }).then(()=>{
        console.log('sent')
    })

}
const sendcancelationemail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'ankitjakhar225@gmail.com',
        subject:'Sorry to see you go!',
        text:`Goodbye,${name}. I hope to see you sometime soon.`
    }).then(()=>{
        console.log('goodby')
    })
}

module.exports={
    sendwelcomemail,
    sendcancelationemail
}