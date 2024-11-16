import React from 'react';
import '../../style/explore.css';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Latest Furniture Trends for Spring',
      author: 'Emily Johnson',
      date: '11 Jan 2023',
      readTime: '3 min read',
      Image: '/e1.png',
    },
    {
      title: 'Modern Furniture Trends for Summer',
      author: 'Sara Mitchell',
      date: '15 Feb 2023',
      readTime: '4 min read',
      Image: '/e2.png',
    },
    {
      title: 'Explore Stylish Furniture Trends for Spring',
      author: 'Rabbi Khan',
      date: '20 Mar 2023',
      readTime: '5 min read',
      Image: '/e3.png',
    },
    {
      title: 'Classic Decor Styles Making a Comeback',
      author: 'Sophia Lee',
      date: '05 Apr 2023',
      readTime: '6 min read',
      Image: '/e4.png',
    },
    {
      title: 'Minimalist Furniture Ideas for a Modern Look',
      author: 'Michael Brown',
      date: '10 May 2023',
      readTime: '3 min read',
      Image: '/e5.png',
    },
    {
      title: 'Eco-Friendly Furniture Options for 2023',
      author: 'Amelia Davis',
      date: '15 Jun 2023',
      readTime: '5 min read',
      Image: '/e6.png',
    },
    {
      title: 'Top 5 Luxury Furniture Brands',
      author: 'James Anderson',
      date: '25 Jul 2023',
      readTime: '4 min read',
      Image: '/e7.png',
    },
    {
      title: 'How to Choose the Perfect Sofa',
      author: 'Emma Clark',
      date: '10 Aug 2023',
      readTime: '6 min read',
      Image: '/e8.png',
    },
    {
      title: 'Modern Office Furniture Ideas for 2023',
      author: 'Daniel Kim',
      date: '05 Sep 2023',
      readTime: '3 min read',
      Image: '/e9.png',
    },
    {
      title: 'Decor Tips for a Cozy Living Room',
      author: 'Olivia Garcia',
      date: '18 Oct 2023',
      readTime: '4 min read',
      Image: '/e10.png',
    },
    {
      title: 'Top Luxury Furniture Brands',
      author: 'Emily Anderson',
      date: '26 Jul 2023',
      readTime: '2 min read',
      Image: '/s62.png',
    },
    {
      title: 'Eco-Friendly Furniture Options for 2023',
      author: 'Amelia David',
      date: '13 Jun 2023',
      readTime: '1 min read',
      Image: '/s3.png',
    },
  ];

  return (
    <section className="blog-section">
      <div className="section-header">
        <h2>Discover the Latest Trends</h2>
        <p>Stay updated with our information and engaging blog posts about modern furniture and fashion in the industry</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.Image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">Furniture</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-author">• {post.author} <br /> • {post.date} <br /> • {post.readTime}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
