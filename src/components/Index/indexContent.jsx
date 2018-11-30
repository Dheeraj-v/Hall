import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout
class IndexContent extends Component {

    render() {
        return (
            <Layout className = "content-style">
                <Content className="mar-l-8 ">
                    <h5 >Greetings!</h5>
                    <p className ="mar-r-10 custom-para">
                    Weddings are ‘once in a lifetime’ affair and we know very well how important even the minutest things are. Therefore, we leave no stone upturned when you come to celebrate familial ceremonies at our property.
                    If you are in Chennai near saidapet and want to make your wedding or reception event special, then this is the place.
                    We welcome you warmly to our newly renovated Marriage Hall with all modern amenities.
   
</p>
                    <p className ="mar-r-10 custom-para">
                    Our Spacious and tradional marriage hall is in main area so that your friends and families can easily reach the place without any difficulties.
                    Our newly modified Hall is equiped with Centralized AC which extends to the Dining Hall too. Also we have 6 individual rooms equipped with Air Conditioners.
                    
</p>
                    <p className ="mar-r-10 custom-para">
                        </p>
                </Content>
            </Layout>
        )
    }
}

export default IndexContent
