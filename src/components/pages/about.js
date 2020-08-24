import React from "react" ;
import profilePicture from "../../../static/assets/images/bio/WIN_20190920_11_26_48_Pro.jpg"

export default function() {
    return(
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >

            </div>

            <div className="right-column">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, illo! Esse nobis maiores, maxime earum culpa consectetur quos impedit. Placeat enim, consequatur aspernatur ad deserunt ullam exercitationem! In, quod rem.
Quaerat autem laboriosam harum placeat ut est eum. Nam praesentium, veritatis quam esse ipsa voluptates impedit placeat! Ratione iusto alias ut maxime voluptatum deserunt voluptatibus minus doloremque, eaque dolore quod.
Tempore repellat ipsum alias ducimus libero consectetur reiciendis ipsa, atque ex eaque. Perferendis sint ea repellendus autem laudantium odit numquam iusto provident, ex saepe praesentium aliquam consequatur, molestiae harum at.
            </div>

        </div>
    )
}
