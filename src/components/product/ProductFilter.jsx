export default function ProductFilter({
  active,
  setActive
}) {


const filters = [
  "All",
  "AIKO",
  "LONGi",
  "Trina"
];


return (

<div className="
flex
flex-wrap
justify-center
gap-4
">


{
filters.map(filter=>(

<button

key={filter}

onClick={()=>setActive(filter)}

className={`
px-6
py-3
rounded-full
transition

${
active === filter
?
"bg-blue-600 text-white"
:
"bg-slate-100"
}

`}

>

{filter}

</button>

))
}


</div>

)

}