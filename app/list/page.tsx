import Link from "next/link";

export default function List() {
    
    return (
        <div>
            <h4 className="title">상품목록</h4>
            <div className="food">
                <h4>상품1 $40</h4>
            </div>
            <div className="food">
                <h4>상품2 $20</h4>
            </div>

            <Link href="/" style={{color: "blue", textDecorationLine: "underline"}}>홈으로</Link>
        </div>

    )
}