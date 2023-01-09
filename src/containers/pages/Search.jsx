import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { search_blog } from "redux/actions/blog";
import FullWidthLayout from "hocs/layout/FullWidthLayout";
import BlogListSearch from "components/blog/BlogListSearch";

const Search = ({ search_blog, posts }) => {

    const params = useParams()
    const term = params.term

    useEffect(() => {
        search_blog(term)
    }, [])

    return (
        <FullWidthLayout>
            <BlogListSearch blog_list={posts} />
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    posts: state.blog.filtered_posts
})

export default connect(mapStateToProps, {
    search_blog
})(Search)