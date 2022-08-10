const mongoose = require("mongoose");

const bImage1Id = mongoose.Types.ObjectId()
const bImage2Id = mongoose.Types.ObjectId()
const bImage3Id = mongoose.Types.ObjectId()

const pImage1Id = mongoose.Types.ObjectId()
const pImage2Id = mongoose.Types.ObjectId()
const pImage3Id = mongoose.Types.ObjectId()
const pImage4Id = mongoose.Types.ObjectId()

const data = {
    bImages: [
      {
        _id: bImage1Id,
        cloudinaryId: 'image1_q43kpm',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656066866/image1_q43kpm.jpg'
      },
      {
        _id: bImage2Id,
        cloudinaryId: 'image2_fqyuc1',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656066866/image2_fqyuc1.jpg'
      },
      {
        _id: bImage3Id,
        cloudinaryId: 'image3_hydwed',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656066866/image3_hydwed.jpg'
      },
     
    ],

    pImages: [
      {
        _id: pImage1Id,
        cloudinaryId: 'image4_i3jykq',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image4_i3jykq.jpg'
      },
      {
        _id: pImage2Id,
        cloudinaryId: 'image7_xl4hxs',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image7_xl4hxs.jpg'
      },
      {
        _id: pImage3Id,
        cloudinaryId: 'image6_zndadu',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image6_zndadu.jpg'
      },
      {
        _id: pImage4Id,
        cloudinaryId: 'image5_fe3qdg',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image5_fe3qdg.jpg'
      }
    ],
  
    projects: [
        {
            title: 'Contents manager App',
            description: 'Making content management easy in a profitable and professional way...',
            image: pImage1Id,
            projectUrl: 'https://www.google.com',
            technologies: [{technology: 'Ruby'}, {technology: 'Ruby on rails'}, {technology: 'embeded ruby'}],
            role_description: 'Fulstack, solely designed and developed by me.',
            userId: 'google-oauth2|114549597793205362848',
        },
        {
            title: 'E-event',
            description: 'Electronically invite people to your events privately...',
            image: pImage2Id,
            projectUrl: 'https://www.google.com',
            technologies: [{technology: 'Ruby'}, {technology: 'Ruby on rails'}, {technology: 'embeded ruby'}],
            role_description: 'Fulstack, solely designed and developed by me.',
            userId: 'google-oauth2|114549597793205362848',
        },
        {
            title: 'Facebook clone',
            description: 'Replicated facebook social media app',
            image: pImage3Id,
            projectUrl: 'https://www.google.com',
            technologies: [{technology: 'Ruby'}, {technology: 'Ruby on rails'}, {technology: 'embeded ruby'}],
            role_description: 'Fulstack, solely designed and developed by me.',
            userId: 'google-oauth2|114549597793205362848',
        },
        {
            title: 'Club house clone',
            description: 'Replicated club house design',
            image: pImage4Id,
            projectUrl: 'https://www.google.com',
            technologies: [{technology: 'Ruby'}, {technology: 'Ruby on rails'}, {technology: 'embeded ruby'}],
            role_description: 'Fulstack, solely designed and developed by me.',
            userId: 'google-oauth2|114549597793205362848',
        },
    ],

    blogs: [
        {
          slug: 'my-first-blog',
          title: 'My First Blog',
          subTitle: 'It was chilly winter day...',
          body: '<p>Some very nice content</p>',
          image: bImage1Id,
          userId: 'google-oauth2|114549597793205362848',
          status: 'published'
        },
        {
          slug: 'my-second-blog',
          title: 'My Second Blog',
          subTitle: 'It was hot summer day...',
          body: '<p>Some very nice content</p>',
          image: bImage2Id,
          userId: 'google-oauth2|114549597793205362848',
          status: 'published'
        },
        {
          slug: 'my-third-blog',
          title: 'My Third Blog',
          subTitle: 'It was rainy spring day...',
          body: '<p>Some very nice content</p>',
          image: bImage3Id,
          userId: 'google-oauth2|114549597793205362848',
          status: 'published'
        }
      
      
      ]
       
}

module.exports = data;


