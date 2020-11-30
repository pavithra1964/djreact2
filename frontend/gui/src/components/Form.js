import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';
const FormItem = Form.Item;

class CustomForm extends React.Component {
     
    handleFormSubmit = (event, requestType, articleID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch ( requestType ) {
            case 'post':
                 axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.log(error));
            
             case 'put':
                 axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
                

            }
    }
    
    render() {
        return (
            <div>
            <Form onSubmitCapture={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID
            )}>
            <FormItem label="Title">
                 <Input name="title" type="text" placeholder="put a title here" />
            </FormItem>
                            
            <FormItem label="Content">
                 <Input name="content" placeholder="Enter some content..." />
            </FormItem>
           <FormItem>
            <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
           </FormItem>
                                
            </Form>
            </div>

        );
                
    }
}
export default CustomForm;