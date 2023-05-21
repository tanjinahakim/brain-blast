import useTitle from "../../hooks/useTitle";
const Blog = () => {
    useTitle('Blogs')
    return (
        <div className="max-w-5xl mx-auto my-20">

            <div className="text-justify">
                <h3 className="font my-5">What is an access token and refresh token?</h3>
                <p className="font1">Simply said, a refresh token enables you to re-validate a user without requiring them to repeatedly provide their login information. If the refresh token is legitimate and requests access to secret resources, the access token is reissued.This enables you to have temporary access tokens without constantly collecting credentials. As part of a user`s initial authentication and authorization procedure, you ask for a refresh token in addition to the access and/or ID tokens. Refresh tokens are therefore need to be securely stored by applications as they allow users to maintain their authentication.Persistent refresh tokens enhance the user`s authentication experience for clients like native applications.Because they are not intended to hold sensitive information, access tokens and refresh tokens shouldn`t be kept in local/session storage. Since we require the access token for the majority of my queries to the Resource Server, we would put it in a httpOnly cookie.

                </p>
            </div>
            <div className="text-justify">
                <h3 className="font my-5">Compare SQL and NoSQL databases?</h3>
                <p className="font1">While NoSQL databases scale horizontally, SQL databases scale vertically. While NoSQL databases are document, key-value, graph, or wide-column stores, SQL databases are table-based. While NoSQL databases are better for unstructured data like documents or JSON, SQL databases are superior for multi-row transactions.

                </p>
            </div>
            <div className="text-justify">
                <h3 className="font my-5">Compare SQL and NoSQL databases?</h3>
                <p className="font1">While NoSQL databases scale horizontally, SQL databases scale vertically. While NoSQL databases are document, key-value, graph, or wide-column stores, SQL databases are table-based. While NoSQL databases are better for unstructured data like documents or JSON, SQL databases are superior for multi-row transactions.

                </p>
            </div>
            <div className="text-justify">
                <h3 className="font my-5">What is express js?</h3>
                <p className="font1">Express.js, sometimes known as Express, is a Node.js back end web application framework that is made available as free and open-source software under the MIT License. It is used to create RESTful APIs. It is made for creating APIs and online applications.
                </p>
            </div>
            <div className="text-justify">
                <h3 className="font my-5">What is express js?</h3>
                <p className="font1">Express.js, sometimes known as Express, is a Node.js back end web application framework that is made available as free and open-source software under the MIT License. It is used to create RESTful APIs. It is made for creating APIs and online applications.
                </p>
            </div>
            <div className="text-justify">
                <h3 className="font my-5">What is Next JS?</h3>
                <p className="font1">Next.js is a React framework that gives you building blocks to create web applications.By framework, we mean Next.js, which manages the React-specific tools and setup requirements as well as adds extra organization, functionality, and optimizations to your application.
                </p>
            </div>
            <div className="text-justify">
                <h3 className="font my-5">What is MongoDB aggregate and how does it work?</h3>
                <p className="font1">Aggregation is the process of going through many phases with a huge collection of documents to process them. A pipeline is made up of the several phases. Filtering, sorting, grouping, reshaping, and altering documents as they go through a pipeline are all possible.
                </p>
            </div>
        </div>
    );
};

export default Blog;