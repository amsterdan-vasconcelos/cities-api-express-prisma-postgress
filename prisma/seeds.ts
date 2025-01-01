import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const citiesCeara = [
  'Abaiara',
  'Acarape',
  'Acaraú',
  'Acopiara',
  'Aiuaba',
  'Alcântaras',
  'Altaneira',
  'Alto Santo',
  'Amontada',
  'Antonina do Norte',
  'Apuiarés',
  'Aquiraz',
  'Aracati',
  'Aracoiaba',
  'Ararendá',
  'Araripe',
  'Aratuba',
  'Arneiroz',
  'Assaré',
  'Aurora',
  'Baixio',
  'Banabuiú',
  'Barbalha',
  'Barreira',
  'Barro',
  'Barroquinha',
  'Baturité',
  'Beberibe',
  'Bela Cruz',
  'Boa Viagem',
  'Brejo Santo',
  'Camocim',
  'Campos Sales',
  'Canindé',
  'Capistrano',
  'Caridade',
  'Cariré',
  'Caririaçu',
  'Cariús',
  'Carnaubal',
  'Cascavel',
  'Catarina',
  'Catunda',
  'Caucaia',
  'Cedro',
  'Chaval',
  'Choró',
  'Chorozinho',
  'Coreaú',
  'Crateús',
  'Crato',
  'Croatá',
  'Cruz',
  'Deputado Irapuan Pinheiro',
  'Ererê',
  'Eusébio',
  'Farias Brito',
  'Forquilha',
  'Fortaleza',
  'Fortim',
  'Frecheirinha',
  'General Sampaio',
  'Graça',
  'Granja',
  'Granjeiro',
  'Groaíras',
  'Guaiúba',
  'Guaraciaba do Norte',
  'Guaramiranga',
  'Hidrolândia',
  'Horizonte',
  'Ibaretama',
  'Ibiapina',
  'Ibicuitinga',
  'Icapuí',
  'Icó',
  'Iguatu',
  'Independência',
  'Ipaporanga',
  'Ipaumirim',
  'Ipu',
  'Ipueiras',
  'Iracema',
  'Irauçuba',
  'Itaiçaba',
  'Itaitinga',
  'Itapajé',
  'Itapipoca',
  'Itapiúna',
  'Itarema',
  'Itatira',
  'Jaguaretama',
  'Jaguaribara',
  'Jaguaribe',
  'Jaguaruana',
  'Jardim',
  'Jati',
  'Jijoca de Jericoaroara',
  'Juazeiro do Norte',
  'Jucás',
  'Lavras da Mangabeira',
  'Limoeiro do Norte',
  'Madalena',
  'Maracanaú',
  'Maranguape',
  'Marco',
  'Martinópole',
  'Massapê',
  'Mauriti',
  'Meruoca',
  'Milagres',
  'Milhã',
  'Miraíma',
  'Missão Velha',
  'Mombaça',
  'Monsenhor Tabosa',
  'Morada Nova',
  'Moraújo',
  'Morrinhos',
  'Mucambo',
  'Mulungu',
  'Nova Olinda',
  'Nova Russas',
  'Novo Oriente',
  'Ocara',
  'Orós',
  'Pacajus',
  'Pacatuba',
  'Pacoti',
  'Pacujá',
  'Palhano',
  'Palmácia',
  'Paracuru',
  'Paraipaba',
  'Parambu',
  'Paramoti',
  'Pedra Branca',
  'Penaforte',
  'Pentecoste',
  'Pereiro',
  'Pindoretama',
  'Piquet Carneiro',
  'Pires Ferreira',
  'Poranga',
  'Porteiras',
  'Potengi',
  'Potiretama',
  'Quiterianópolis',
  'Quixadá',
  'Quixelô',
  'Quixeramobim',
  'Quixeré',
  'Redenção',
  'Reriutaba',
  'Russas',
  'Saboeiro',
  'Salitre',
  'Santa Quitéria',
  'Santana do Acaraú',
  'Santana do Cariri',
  'São Benedito',
  'São Gonçalo do Amarante',
  'São João do Jaguaribe',
  'São Luís do Curu',
  'Senador Pompeu',
  'Senador Sá',
  'Sobral',
  'Solonópole',
  'Tabuleiro do Norte',
  'Tamboril',
  'Tarrafas',
  'Tauá',
  'Tejuçuoca',
  'Tianguá',
  'Trairi',
  'Tururu',
  'Ubajara',
  'Umari',
  'Umirim',
  'Uruburetama',
  'Uruoca',
  'Varjota',
  'Várzea Alegre',
  'Viçosa do Ceará',
];

const cities = citiesCeara.map((city) => ({ name: city }));

async function seed() {
  await prisma.city.createMany({ data: cities });

  console.log('Database seeded');
  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
