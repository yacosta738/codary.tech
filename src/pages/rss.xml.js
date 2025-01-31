import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'TecNoticias',
    description: 'Las últimas noticias sobre tecnología, programación y desarrollo web',
    site: context.site,
    items: [
      {
        title: 'ChatGPT: El futuro de la IA conversacional',
        pubDate: new Date('2024-03-15'),
        description: 'Descubre cómo la inteligencia artificial está transformando la manera en que interactuamos con la tecnología.',
        link: '/articulo/chatgpt-futuro-ia',
      },
      // Add more items here
    ],
    customData: `<language>es-es</language>`,
  });
}
