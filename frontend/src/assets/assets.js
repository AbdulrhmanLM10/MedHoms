import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]



export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Ahmet Yılmaz',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ahmet has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Cumhuriyet Mahallesi, 101. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Elif Kaya',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Elif has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: 'Bahçelievler Mahallesi, 202. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Ömer Demir',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ömer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: 'Gülistan Mahallesi, 303. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Mehmet Çelik',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Mehmet has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: 'İstiklal Mahallesi, 404. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Ayşe Şahin',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ayşe has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Yayla Mahallesi, 505. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Burak Aksoy',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Burak has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Sanayi Mahallesi, 606. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Yusuf Tekin',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Yusuf has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Halıkent Mahallesi, 707. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Eren Özkan',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Eren has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: 'Hızırbey Mahallesi, 808. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Cansu Polat',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Cansu has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: 'Kepeci Mahallesi, 909. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Hasan Koç',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Hasan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: 'Dere Mahallesi, 1010. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Melis Güler',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Melis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Karaağaç Mahallesi, 1111. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Alper Demirtaş',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Alper has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Bağlar Mahallesi, 1212. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Selin Arslan',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Selin has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Çünür Mahallesi, 1313. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Cem Karaman',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Cem has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: 'Ayazmana Mahallesi, 1414. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Esra Aydın',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Esra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: 'Süleyman Mahallesi, 1515. Sokak',
            line2: 'Merkez, Isparta, Türkiye'
        }
    },
];

