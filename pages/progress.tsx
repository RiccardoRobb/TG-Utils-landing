import Head from "next/head";
import { TgQuest } from "../types";


export default function Progress() {
    const quests: TgQuest[] = [
        {
            name: "@BullyBuy",
            targets: "@PrezziBoni @PrezziPopoli",
            total: 100,
            partial: 37
        },
        {
            name: "@BullyBuy",
            targets: "@PrezziBoni @PrezziPopoli",
            total: 1000,
            partial: 700
        },
        {
            name: "@BullyBuy",
            targets: "@PrezziBoni @PrezziPopoli",
            total: 1000,
            partial: 1000
        }
    ];

    function getColor(obj: TgQuest){
        let val = (obj.partial * 5) / obj.total;

        if (val < 1) 
            return "one";
        else if (val < 2)
            return "two";
        else if (val < 3)
            return "three";
        else if (val < 4)
            return "four";
        else if (val < 5)
            return "five";
        else
            return "six";
    }

    return (
        <>
        <Head>
            <title>Turbo telegram - Progress</title>
            <meta name="description" content="Powerful tools to improve you Telegram experience. Real members for yout Telegram group and Useful BOTs"/>
        </Head>
        <div className="container d-flex justify-content-md-center align-items-center vh-100">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Group</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Targets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quests && quests.map((quest, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="re">{quest.name}</td>
                                        <td>
                                            <div className={getColor(quest)}>{quest.partial}/{quest.total}</div> 
                                        </td>
                                        <td className="last">{quest.targets}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}