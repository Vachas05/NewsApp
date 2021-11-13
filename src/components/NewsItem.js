import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div class="card">
                    <img src={imageUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">By {author === null ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
