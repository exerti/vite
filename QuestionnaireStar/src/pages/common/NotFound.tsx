import React, { FC } from "react";
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";
import{ HOME_PATH} from '../../router'
const NotFound: FC = () => {
    return <>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" >
                <Link to={HOME_PATH}>返回首页</Link>
            </Button>}
        />
    </>
}

export default NotFound;