const gods = [
  {
    name: "Lord Shiva",
    mantra:" ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥",
    img: "https://cdn.pixabay.com/photo/2024/07/24/15/55/ai-generated-8918723_1280.png"
    
  },
  {
    name: "Lord Vishnu",
    mantra: "ॐ नमो भगवते वासुदेवाय, ॐ नमो नारायणाय और शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं, विश्वाधारं गगनसदृशं मेघवर्ण शुभांगम्। लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यम्, वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम्।",
    img: "https://t3.ftcdn.net/jpg/11/43/61/22/240_F_1143612209_UDnVlLPQON4lt2CUmfTAddp2qWO9cezg.jpg"
  },
  {
    name: "Goddess Lakshmi",
    mantra:  "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः।",
    img: "https://t4.ftcdn.net/jpg/09/46/43/45/240_F_946434512_NlPxzEJhmWgigsrsab7BYPAMR6D3PtcG.jpg"
  },
  {
    name: "Lord Hanuman",
    mantra: "ॐ हं हनुमते नमः,    ॐ नमो भगवते आंजनेयाय महाबलाय स्वाहा, और मनोजवं मारुततुल्यवेगं, जितेन्द्रियं बुद्धिमतां वरिष्ठम्। वातात्मजं वानरयूथमुख्यं, श्रीरामदूतं शरणं प्रपद्ये॥",
    img: "https://cdn.pixabay.com/photo/2024/05/08/20/26/hanuman-8749056_1280.jpg"
  },
  {
    name: "Lord Ganesha",
    mantra: "ॐ गं गणपतये नमः, ॐ गं गणपतये नमो नम: श्री सिद्धिविनायक नमो नम: अष्टविनायक नमो नम: गणपती बाप्पा मोरया , ॐ गं गणपतये नमो नम:  श्री सिद्धिविनायक नमो नम:  अष्टविनायक नमो नम:  गणपती बाप्पा मोरया",
    img: "https://cdn.pixabay.com/photo/2024/03/27/07/14/ai-generated-8658377_1280.jpg"
    
    
  },
  {
    name: "Goddess Saraswati",
    mantra: "ॐ ऐं सरस्वत्यै नमः, ॐ सरस्वती मया दृष्ट्वा, वीणा पुस्तक धारणीम् ।हंस वाहिनी समायुक्ता मां विद्या दान करोतु में ॐ ।। ",
    img: "https://img.freepik.com/premium-photo/hindu-beautiful-goddess-saraswati-embodiment-knowledge-generative-ai_849906-11215.jpg?w=2000"
  },
  {
    name: "Lord Krishna",
    mantra: "ॐ कृष्णाय नमः, कृष्णाय वासुदेवाय हरये परमात्मने प्रणतः क्लेशनाशाय गोविंदाय नमो नमः",
    img: "https://cdn.pixabay.com/photo/2024/02/13/07/19/krishna-8570354_1280.jpg"
  },
  {
    name: "Goddess Durga",
    mantra: "ॐ दुं दुर्गायै नमः,  ॐ जयन्ती मंगला काली भद्रकाली कपालिनी। दुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोऽस्तुते। , सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके। शरण्ये त्र्यम्बके गौरी नारायणि नमोऽस्तुते।, या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता, नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः।", 
    img: "https://cdn.pixabay.com/photo/2021/09/22/19/47/durga-6647827_1280.jpg"
  },
  {
    name: "Goddess Kali",
    mantra: "ॐ क्रीं कालिकायै नमः,   ॐ क्रीं कालिकायै नमः, ॐ जयंती मंगला काली भद्रकाली कपालिनी दुर्गा क्षमा शिवा धात्री स्वाहा स्वधा नमोस्तुते",
    img: "https://th.bing.com/th/id/OIP.8adQHu-_YxAtnkmsFOoYCQHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    name: "Lord Ram",
    mantra: "ॐ श्री रामाय नमः, ॐ आपदामप हर्तारम दातारं सर्व सम्पदाम, लोकाभिरामं श्री रामं भूयो भूयो नामाम्यहम ! श्री रामाय रामभद्राय रामचन्द्राय वेधसे रघुनाथाय नाथाय सीताया पतये नमः",


    img: "https://th.bing.com/th/id/OIP.mXePgtizUDJPhPUp7wfUKwHaHa?w=197&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  gods.forEach(god => {
    const card = document.createElement('div');
    card.className = 'card-container';

    card.onclick = () => card.classList.toggle('flipped');

    card.innerHTML = `
      <div class="card">
        <div class="front">
          <img src="${god.img}" alt="${god.name}">
          <h2>${god.name}</h2>
          <button>Show Mantra</button>
        </div>
        <div class="back">
          <div class="mantra">${god.mantra}</div>
        </div>
      </div>
    `;

    document.body.appendChild(card);
  });
});
