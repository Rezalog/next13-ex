import Link from "next/link";
import Image from "next/image";

export default function List() {
    
    const food = ['tomato', 'pasta', 'coconut'];

    return (
        <div>
            <h4 className="title">상품목록</h4>

                { food.map((element, index) => {

                    return (
                        <div className="food" key={index}>
                            <img src={`${food[index]}.png`} className="food-img" alt={`${food[index]}!`}
                                 width={200} />
                            <h4>{element} <br/><br/>- Price : $40</h4>
                        </div>
                    );
                }) }

            <Link href="/" style={{color: "blue", textDecorationLine: "underline"}}>홈으로</Link>
        </div>

    )
}