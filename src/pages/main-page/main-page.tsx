import { data } from "../../constants/data"
import { ItemNews } from "./components"

export const MainPage: React.FC = () => {
    return (
        <div>
            <ItemNews news={data} />
        </div>
    )
}