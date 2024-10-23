import { ExclamationCircleOutlined } from "@ant-design/icons"

export const ErrorPage: React.FC = () => {
    return (
        <div>
            <div>
                <ExclamationCircleOutlined />
            </div>
            <h2>Sorry. Something went wrong.</h2>
        </div>
    )
}