import React from 'react';
import { List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({header, data}) =>{
    return (
        <>
            <List
                header={header}
                bordered
                grid={{gutter:4, md:3, xs:2}}
                dataSource={data}
                renderItem={(item)=>
                <>
                    <div>
                        <Card
                            actions={[
                                <StopOutlined key='stop' />
                            ]}
                        >
                            <Card.Meta description={item.nickname} />    
                        </Card>
                    </div>
                </>
                }
            >
            </List>
        </>
    );
}

export default FollowList;