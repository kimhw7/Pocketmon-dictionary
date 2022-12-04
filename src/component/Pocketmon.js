function Pocketmon(imgs, types) {

  console.log(imgs.imgs)
  console.log(types)
  return (
    <div>       
      <img src={imgs.imgs[0]}></img>
      <img src={imgs.imgs[1]}></img>
      {imgs.types.map(el => 
        <span>{el.type.name}</span>)}
    </div>
  )
}

export default Pocketmon;