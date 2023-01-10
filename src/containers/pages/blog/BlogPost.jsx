import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layout/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "redux/actions/blog";

const BlogPost = ({
    get_blog,
    post
}) => {
    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        get_blog(slug)
    }, [])

    return (
        <FullWidthLayout>
            {
                post ?
                    <div className="relative py-16 bg-white overflow-hidden">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span className="block my-4 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                                        {post.category.name}
                                    </span>
                                    <span className="my-4 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        {post.title}
                                    </span>
                                </h1>
                                <p className="my-4 text-lg text-gray-500 leading-8 ">
                                    {post.excerpt}
                                </p>

                                <img className="mx-auto my-8" src={`http://localhost:8000${post.thumbnail}`} alt="" />
                            </div>

                            <div className="mt-6 prose prose-indigo prose-lg text-[#212121] mx-auto">
                                <p>
                                    {post.description}
                                </p>

                            </div>
                        </div>
                    </div>
                    :
                    <LoadingCard />
            }

        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    post: state.blog.post
})

export default connect(mapStateToProps, {
    get_blog
})(BlogPost)