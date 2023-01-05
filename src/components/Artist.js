import React  from "react";

const Artist = ({ artist }) => {
    if(!artist) return null;

    const { images, name, followers, genres} = artist

    return(
        <div className="m-5">
            <h3>{name}</h3>
            <p>{followers?.total?.toLocaleString()} Followers</p>
            <p>{genres.join(", ")}</p>
            <img 
                src={images[0]?.url} 
                alt="artist-profile" 
                style={{
                    height: 300,
                    width: 300,
                    borderRadius: "50%",
                    objectFit: "cover"
                }}
            />
        </div>
    )
}

export default Artist