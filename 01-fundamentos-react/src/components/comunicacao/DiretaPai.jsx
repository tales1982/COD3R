import DiretaFilho from "./DirataFilho";

export default function DiretaPai()
{
    return (
        <div>
            <DiretaFilho nome="Theo" idade={42} nerd={true}/>
            <hr />
            <DiretaFilho nome="Thomas" idade={42} nerd={true}/>
            
        </div>
    )
}