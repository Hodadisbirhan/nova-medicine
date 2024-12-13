import React from 'react';

function News() {
  const newsItems = [
    {
      id: 1,
      title: 'New Advanced Medical Equipment Installation',
      date: 'December 13, 2023',
      category: 'Technology',
      image: 'https://placehold.co/400x300?text=Medical+Equipment',
      excerpt: 'Nova Medics installs state-of-the-art medical equipment to enhance patient care and diagnosis accuracy.'
    },
    {
      id: 2,
      title: 'International Partnership Announcement',
      date: 'December 10, 2023',
      category: 'Partnership',
      image: 'https://placehold.co/400x300?text=Partnership',
      excerpt: 'Expanding our network with leading international hospitals to provide world-class healthcare services.'
    },
    {
      id: 3,
      title: 'Free Health Screening Campaign',
      date: 'December 5, 2023',
      category: 'Community',
      image: 'https://placehold.co/400x300?text=Health+Screening',
      excerpt: 'Join our upcoming free health screening campaign aimed at promoting preventive healthcare.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments and initiatives at Nova Medics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src="/images/doctors/healhy_new.jpg"
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block">
                  {item.date}
                </time>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <button className="text-white bg-primary font-medium hover:text-primary-dark transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}

export default News;
