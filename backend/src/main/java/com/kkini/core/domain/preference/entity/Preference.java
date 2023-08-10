package com.kkini.core.domain.preference.entity;

import com.kkini.core.domain.category.entity.Category;
import com.kkini.core.domain.member.entity.Member;
import com.kkini.core.global.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@NoArgsConstructor
@Getter
@SuperBuilder
public class Preference extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    private int weight;

    public void increaseWeightByEval() { this.weight++; }

    public void decreaseWeightByEval() { this.weight--; }

    public void increaseWeightByLike() { this.weight += 3; }

    public void decreaseWeightByLike() { this.weight -= 3; }

}
