import React from 'react'

export default function ContactUs() {
  return (
    <div>
      
    </div>
  )
}

// import React, { Component } from 'react'
// import * as emailjs from 'emailjs-com'
// import { Button,  Form, FormGroup, Label, Input } from 'reactstrap'



// class ContactForm extends Component<{}, IState>{
//   constructor(props: {}){
//     super(props);

//     this.state = {
//           name: '',
//           email: '',
//           subject: '',
//           message: '',
//     }
//   }

//   public handleSubmit(e: React.FormEvent<HTMLFormElement>):void{

//         e.preventDefault()
//         const { name, email, subject, message } = this.state

//         const { name, age } = body.value

//         let templateParams = {
//             from_name: email,
//             to_name: '<YOUR_EMAIL_ID>',
//             subject: subject,
//             message_html: message,
//         }
       
//         emailjs.send(
//         'gmail',
//         'template_XXXXXXXX',
//         templateParams,
//         'user_XXXXXXXXXXXXXXXXXXXX'
//         )
//         this.resetForm()
//     }

//     resetForm() {
//         this.setState({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//         })
//     }

//     handleChange = (param, e) => {
//         this.setState({ [param]: e.target.value })
//     }

// render() {
//     return (
//       <>
//         {/* <Layout> */}
//           <h1 className="p-heading1">Get in Touch</h1>
//           <Form onSubmit={this.handleSubmit.bind(this)}>
//             <FormGroup controlId="formBasicEmail">
//               <Label className="text-muted">Email address</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 className="text-primary"
//                 onChange={this.handleChange.bind(this, 'email')}
//                 placeholder="Enter email"
//               />
//             </FormGroup>
//             <FormGroup controlId="formBasicName">
//               <Label className="text-muted">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={this.state.name}
//                 className="text-primary"
//                 onChange={this.handleChange.bind(this, 'name')}
//                 placeholder="Name"
//               />
//             </FormGroup>
//             <FormGroup controlId="formBasicSubject">
//               <Label className="text-muted">Subject</Label>
//               <Input
//                 type="text"
//                 name="subject"
//                 className="text-primary"
//                 value={this.state.subject}
//                 onChange={this.handleChange.bind(this, 'subject')}
//                 placeholder="Subject"
//               />
//             </FormGroup>
//             <FormGroup controlId="formBasicMessage">
//                         <Label className="text-muted">Message</Label>
//                         <Input
//                             type="textarea"
//                             name="message"
//                             className="text-primary"
//                             value={this.state.message}
//                             onChange={this.handleChange.bind(this, 'message')}
//                         />
//             </FormGroup>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         {/* </Layout> */}
//       </>
//     )
//   }
// }


// interface IState{
//   currentTask: string,
//   tasks: Array<ITask>;
// }

// interface ITask{
//   id: number,
//   value: string,
//   completed: boolean
// }
// export default ContactForm