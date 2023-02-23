import React from 'react'
import styles from './OurBlog.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blog from '../../commonComponents/Blog/Blog'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
import blog4 from '../../images/blog4.png'
import blog5 from '../../images/blog5.png'

function OurBlog() {
    return (
        <div className={styles.ourBlogMain}>
            <Container>
                <div className={styles.allBlogsWithTitle}>
                    <h2 className={styles.ourBlogTitle}>Our Blog</h2>
                </div>
                <div className={styles.allBlogs}>
                    <Row>
                        <Col lg={3} xl={3} md={3} >
                            <div className={styles.blog1}>
                                <Blog
                                    img={blog1}
                                    mainLine="Dairy products full of yum"
                                    blogParagraph="Dairy products are served in a large variety of flavors and styles."
                                />
                            </div>
                            <Blog
                                img={blog2}
                                mainLine="The best meat in town"
                                blogParagraph="Meat is a high source of protein and has growing importance and demand." 

                                />
                        </Col>
                        <Col lg={6} xl={6} md={6} >
                            <Blog 
                            img={blog3} 
                            mainLine="Fruits, vegetables and lots of greens."
                            blogParagraph="Eat fruits plenty, keep your body healthy. Die old with fruits and vegetables."    
                            />
                        </Col>
                        <Col lg={3} xl={3} md={3} >
                            <div className={styles.blog1}>
                                <Blog 
                                img={blog4} 
                                mainLine="Range of cleaning products"
                                blogParagraph="Cleaning products are mostly of two types chemical-based and home-based."    
                                />
                            </div>
                            <Blog 
                            img={blog5} 
                            mainLine="Take a sip right now!"  
                            blogParagraph="No matter the season, hot drinks are a timeless way to unwind after a long day." 
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default OurBlog