import { comments11, comments12, comments13, comments21, comments22 } from "../../constants/data"
import { ItemComment, ItemInfo } from "./components"

export const ItemPage: React.FC = () => {
    return (
        <div>
            <ItemInfo />
            <div>
                <div>
                    <ItemComment comment={comments11} />
                    <div>
                        <ItemComment comment={comments12} />
                    </div>
                    <div>
                        <ItemComment comment={comments13} />
                    </div>
                </div>
                <div>
                    <ItemComment comment={comments21} />
                    <div>
                    <ItemComment comment={comments22} />
                    </div>
                </div>
            </div>
        </div>
    )
}