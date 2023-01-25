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
                    <h3 className={styles.ourBlogTitle}>Our Blog</h3>
                </div>
                <div className={styles.allBlogs}>
                    <Row>
                        <Col lg={3} xl={3} md={3} >
                            <div className={styles.blog1}>
                                <Blog img={blog1} />
                            </div>
                            <Blog img={blog2} />
                        </Col>
                        <Col lg={6} xl={6} md={6} >
                            <Blog img={blog3} />
                        </Col>
                        <Col lg={3} xl={3} md={3} >
                            <div className={styles.blog1}>
                                <Blog img={blog4} />
                            </div>
                            <Blog img={blog5} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default OurBlog