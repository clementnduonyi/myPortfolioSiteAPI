const mongoose = require("mongoose");

const image1Id = mongoose.Types.ObjectId()
const image2Id = mongoose.Types.ObjectId()
const image3Id = mongoose.Types.ObjectId()

const image4Id = mongoose.Types.ObjectId()
const image5Id = mongoose.Types.ObjectId()
const image6Id = mongoose.Types.ObjectId()
const image7Id = mongoose.Types.ObjectId()

const data = {
    images: [
      {
        _id: image1Id,
        cloudinaryId: 'image1_q43kpm',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656066866/image1_q43kpm.jpg'
      },
      {
        _id: image2Id,
        cloudinaryId: 'image2_fqyuc1',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656066866/image2_fqyuc1.jpg'
      },
      {
        _id: image3Id,
        cloudinaryId: 'image3_hydwed',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656066866/image3_hydwed.jpg'
      },
      {
        _id: image4Id,
        cloudinaryId: 'image4_i3jykq',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image4_i3jykq.jpg'
      },
      {
        _id: image5Id,
        cloudinaryId: 'image7_xl4hxs',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image7_xl4hxs.jpg'
      },
      {
        _id:image6Id,
        cloudinaryId: 'image6_zndadu',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image6_zndadu.jpg'
      },
      {
        _id: image7Id,
        cloudinaryId: 'image5_fe3qdg',
        url: 'https://res.cloudinary.com/ccapp/image/upload/v1656075513/image5_fe3qdg.jpg'
      }
     
    ],

  
  
    projects: [
        {
            title: 'Contents manager App',
            description: 'Making content management easy in a profitable and professional way...',
            image: image1Id,
            projectUrl: 'https://www.google.com',
            technologies: [{technology: 'Ruby'}, {technology: 'Ruby on rails'}, {technology: 'embeded ruby'}],
            role_description: 'Fulstack, solely designed and developed by me.',
            userId: 'google-oauth2|114549597793205362848',
        },
        {
            title: 'E-event',
            description: 'Electronically invite people to your events privately...',
            image: image2Id,
            projectUrl: 'https://www.google.com',
            technologies: [{technology: 'Ruby'}, {technology: 'Ruby on rails'}, {technology: 'embeded ruby'}],
            role_description: 'Fulstack, solely designed and developed by me.',
            userId: 'google-oauth2|114549597793205362848',
        },
        {
            title: 'Facebook clone',
            description: 'Replicated facebook social media app',
            image: image3Id,
            projectUrl: 'https://www.google.com',
            technologies: [{technology: 'Ruby'}, {technology: 'Ruby on rails'}, {technology: 'embeded ruby'}],
            role_description: 'Fulstack, solely designed and developed by me.',
            userId: 'google-oauth2|114549597793205362848',
        },
        {
            title: 'Club house clone',
            description: 'Replicated club house design',
            image: image4Id,
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
          image: image5Id,
          userId: 'google-oauth2|114549597793205362848',
          status: 'published'
        },
        {
          slug: 'my-second-blog',
          title: 'My Second Blog',
          subTitle: 'It was hot summer day...',
          body: '<p>Some very nice content</p>',
          image: image6Id,
          userId: 'google-oauth2|114549597793205362848',
          status: 'published'
        },
        {
          slug: 'my-third-blog',
          title: 'My Third Blog',
          subTitle: 'It was rainy spring day...',
          body: '<p>Some very nice content</p>',
          image: image7Id,
          userId: 'google-oauth2|114549597793205362848',
          status: 'published'
        }
      
      
      ]
       
}

module.exports = data;


