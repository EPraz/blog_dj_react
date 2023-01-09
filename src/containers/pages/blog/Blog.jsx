// import BlogCategories from "components/blog/BlogCategories";
import Header from "components/blog/Header";
import BlogList from "components/blog/BlogList";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";
import FullWidthLayout from "hocs/layout/FullWidthLayout";
import BlogCategories from "components/blog/BlogCategories";

const Blog = ({
    get_blog_list,
    get_blog_list_page,
    blog_list
}) => {

    useEffect(()=>{
        get_blog_list()
    },[])

    return(
        <FullWidthLayout>
            <Header/>
            <BlogCategories />
            <BlogList get_blog_list_page={get_blog_list_page} blog_list={blog_list}/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    blog_list: state.blog.blog_list,
})

export default connect(mapStateToProps,{
    get_blog_list,
    get_blog_list_page
})(Blog)